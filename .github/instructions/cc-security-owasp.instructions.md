---
description: "OWASP Top 10 security verification checklist and vulnerability detection patterns for code reviews"
applyTo: "**/*"
---

# OWASP Top 10 Security Standards for Code Review

## Security Scope Assessment

First, determine the security risk profile of changes:

**HIGH RISK** (Full OWASP review required):

-   Changes to authentication/authorization logic
-   New API endpoints or modifications to existing ones
-   Database query modifications or new queries
-   File upload/download functionality
-   User input handling changes
-   Cryptographic operations
-   Session management changes
-   Security configuration changes

**MEDIUM RISK** (Targeted OWASP review):

-   Business logic changes affecting data access
-   Frontend form handling
-   Third-party integrations
-   Configuration file changes
-   Dependency updates

**LOW RISK** (Basic security checks):

-   Documentation only
-   Test file changes only
-   UI styling changes without logic
-   Logging/monitoring additions

For HIGH and MEDIUM risk changes, proceed with comprehensive OWASP analysis.
For LOW risk changes, perform basic security checks (secrets, sensitive data exposure).

## OWASP Top 10 Verification Checklist

### 1. Broken Access Control

-   Verify authorization checks on all endpoints and functions
-   Check for insecure direct object references (IDOR)
-   Ensure users cannot access resources outside their permissions
-   Verify role-based access control (RBAC) implementation
-   Check for missing function-level access control
-   Validate that elevated privilege operations require proper authorization

### 2. Cryptographic Failures

-   Verify sensitive data is encrypted in transit (TLS/HTTPS)
-   Check for encryption at rest for sensitive data
-   Ensure no hardcoded secrets, API keys, or passwords
-   Verify secure password hashing (bcrypt, Argon2, PBKDF2)
-   Check for proper key management and rotation
-   Validate secure random number generation (not Math.random())

### 3. Injection Vulnerabilities

-   Check for SQL injection: verify parameterized queries or ORMs
-   Check for NoSQL injection: validate query sanitization
-   Check for XSS: verify output encoding/escaping
-   Check for command injection: validate shell command sanitization
-   Check for LDAP, XML, and other injection types
-   Verify input validation on all user-supplied data

### 4. Insecure Design

-   Evaluate threat modeling for new features
-   Check for missing security requirements
-   Verify defense in depth implementation
-   Assess business logic vulnerabilities
-   Check for missing rate limiting on sensitive operations
-   Verify secure defaults are used

### 5. Security Misconfiguration

-   Check for unnecessary features/ports/services enabled
-   Verify error messages don't leak sensitive information
-   Check for default accounts/passwords
-   Verify security headers (CSP, HSTS, X-Frame-Options, etc.)
-   Check CORS configuration is not overly permissive
-   Verify secure cookie flags (HttpOnly, Secure, SameSite)

### 6. Vulnerable and Outdated Components

-   Check for known vulnerabilities in dependencies
-   Verify dependency versions are current
-   Review security advisories for used libraries
-   Check for deprecated or unmaintained dependencies

### 7. Authentication Failures

-   Verify strong password policies
-   Check for account lockout mechanisms
-   Verify multi-factor authentication where required
-   Check session timeout configuration
-   Verify secure session management (token rotation, invalidation)
-   Check for credential stuffing protection

### 8. Software and Data Integrity Failures

-   Verify digital signatures for updates/deployments
-   Check CI/CD pipeline security
-   Verify integrity of serialized data
-   Check for insecure deserialization vulnerabilities

### 9. Security Logging and Monitoring Failures

-   Verify security events are logged (auth failures, access violations)
-   Check that logs don't contain sensitive data
-   Verify audit trails are tamper-proof
-   Check for real-time alerting on critical events

### 10. Server-Side Request Forgery (SSRF)

-   Verify URL validation and whitelisting
-   Check for internal network access restrictions
-   Verify DNS rebinding protection
-   Check for metadata service access (cloud environments)

## Technology-Specific Security Checks

### For APIs/Backends

-   Verify CSRF protection for state-changing operations
-   Check rate limiting and throttling mechanisms
-   Verify API authentication (OAuth, JWT, API keys)
-   Check for mass assignment vulnerabilities
-   Verify pagination to prevent resource exhaustion
-   Check for XML External Entity (XXE) vulnerabilities

### For Frontend/Web

-   Verify Content Security Policy (CSP) implementation
-   Check for XSS in dynamic content rendering
-   Verify secure cookie handling (HttpOnly, Secure, SameSite)
-   Check for clickjacking protection (X-Frame-Options)
-   Verify third-party script integrity (SRI)
-   Check for sensitive data exposure in client-side code

### For Database Operations

-   Verify parameterized queries (prepared statements)
-   Check for proper connection string security
-   Verify least privilege database access
-   Check for SQL injection in dynamic queries
-   Verify database encryption settings

### For File Operations

-   Verify file type validation (whitelist, not blacklist)
-   Check file size limits and enforcement
-   Verify virus/malware scanning integration
-   Check path traversal prevention
-   Verify secure file storage permissions
-   Check for metadata sanitization

### For Authentication/Session Management

-   Verify secure password storage (hashing + salt)
-   Check session token generation (cryptographically secure)
-   Verify session timeout and absolute timeout
-   Check for session fixation vulnerabilities
-   Verify logout functionality destroys sessions
-   Check for concurrent session limits

## Security Analysis Workflow

For EACH changed file, you MUST:

1. Identify data flows: Where does user input enter? Where does it go?
2. Check trust boundaries: Does data cross security boundaries?
3. Verify validation: Is all input validated at boundaries?
4. Check authorization: Are access controls enforced?
5. Assess data sensitivity: Is sensitive data properly protected?
6. Review error handling: Do errors leak sensitive information?

## Common Vulnerability Patterns to Detect

```
// CRITICAL: SQL Injection
const query = `SELECT * FROM users WHERE id = ${userId}`  // VULNERABLE
const query = db.query('SELECT * FROM users WHERE id = ?', [userId])  // SECURE

// CRITICAL: XSS
element.innerHTML = userInput  // VULNERABLE
element.textContent = userInput  // SECURE
element.innerHTML = sanitize(userInput)  // SECURE

// CRITICAL: Path Traversal
const filePath = `./uploads/${req.params.filename}`  // VULNERABLE
const filePath = path.join('./uploads', path.basename(req.params.filename))  // SECURE

// CRITICAL: Command Injection
exec(`ping ${userInput}`)  // VULNERABLE
execFile('ping', [userInput])  // SECURE

// CRITICAL: Insecure Deserialization
const obj = eval(userInput)  // VULNERABLE
const obj = JSON.parse(userInput)  // BETTER (but still validate)

// HIGH: Missing Authorization
app.get('/admin/users', (req, res) => { ... })  // VULNERABLE - no auth check
app.get('/admin/users', authMiddleware, isAdmin, (req, res) => { ... })  // SECURE

// HIGH: Hardcoded Secrets
const apiKey = "sk-1234567890abcdef"  // VULNERABLE
const apiKey = process.env.API_KEY  // SECURE

// MEDIUM: Weak Randomness
const token = Math.random().toString(36)  // VULNERABLE
const token = crypto.randomBytes(32).toString('hex')  // SECURE
```

## Security Issue Severity Classification

### CRITICAL (Must block MR)

-   Unauthenticated access to sensitive operations
-   SQL/NoSQL/Command injection vulnerabilities
-   Remote code execution possibilities
-   Hardcoded credentials or secrets
-   Broken authentication mechanisms
-   Data exposure to unauthorized users

### HIGH (Should block MR)

-   Missing authorization checks
-   XSS vulnerabilities
-   CSRF on state-changing operations
-   Insecure cryptographic algorithms
-   Session management flaws
-   Sensitive data in logs or error messages

### MEDIUM (Should fix soon)

-   Missing security headers
-   Weak input validation
-   Information disclosure in errors
-   Missing rate limiting
-   Overly permissive CORS
-   Insufficient logging

### LOW (Improvement recommended)

-   Non-critical information disclosure
-   Missing security documentation
-   Weak password policies
-   Missing security comments in complex logic

<!-- This is copy of the master file in the ccube-lib-ai-config repo. Update the files there. -->
