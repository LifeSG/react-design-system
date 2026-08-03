#!/bin/bash

# Pre-push e2e validation script.
#
# 1. Determines whether a valid upstream ref exists.
# 2. Runs Playwright's --only-changed to execute tests affected by the diff.
#    This detects changes in test files and their imports (e.g., shared utils).
# 3. After the run, the screenshot-manifest-reporter writes a manifest of all
#    screenshot paths that were referenced and which directories were covered.
# 4. Runs check-stale-screenshots.ts to detect orphaned .png files within
#    those covered directories. Exits with error if any are found.

resolve_changed_ref() {
	if git rev-parse --abbrev-ref --symbolic-full-name @{u} >/dev/null 2>&1; then
		upstream_ref=$(git rev-parse --abbrev-ref --symbolic-full-name @{u})
		if git rev-parse --verify --quiet "$upstream_ref" >/dev/null; then
			printf '%s\n' "$upstream_ref"
			return 0
		fi
	fi

	return 1
}

if ! REMOTE_REF=$(resolve_changed_ref); then
	echo "[e2e] No upstream ref found — skipping E2E. Set an upstream with: git branch --set-upstream-to=<remote>/<branch>"
	exit 0
fi

echo "[e2e] Running changed-file E2E between HEAD and $REMOTE_REF"
npm run test-e2e:changed -- "$REMOTE_REF"
npm run test-e2e:check-stale-screenshots