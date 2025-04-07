import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "src/footer";
import { Layout } from "src/layout";

type Component = typeof Footer;

const meta: Meta<Component> = {
    title: "Navigation/Footer",
    component: Footer,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Footer
                lastUpdated={new Date()}
                showDownloadAddon
                links={[
                    [
                        { children: "Home", href: "https://www.life.gov.sg" },
                        {
                            children: "How it works",
                            href: "https://www.life.gov.sg/#how-it-works",
                        },
                        {
                            children: "Ways we help",
                            href: "https://www.life.gov.sg/#ways-we-help",
                        },
                        {
                            children: "Campaigns",
                            href: "https://www.life.gov.sg/#campaigns",
                        },
                        {
                            children: "News and media",
                            href: "https://www.life.gov.sg/#newsandmedia",
                        },
                    ],
                    [
                        {
                            children: "About us",
                            href: "https://www.life.gov.sg/about-us",
                        },
                        {
                            children: "Help & Support",
                            href: "https://www.life.gov.sg/help-support",
                        },
                        {
                            children: "Get in touch with us",
                            href: "https://www.life.gov.sg/get-in-touch",
                        },
                    ],
                ]}
            />
        );
    },
};

export const MinimalVersion: StoryObj<Component> = {
    render: (_args) => {
        return <Footer lastUpdated={new Date()} />;
    },
};

export const WithCustomContent: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Footer lastUpdated={new Date()}>
                <Layout.Content>
                    <div
                        style={{
                            padding: "2rem 0",
                            background: "yellow",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        My custom content
                    </div>
                </Layout.Content>
            </Footer>
        );
    },
};

export const OtherCustomisations: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Footer
                lastUpdated={new Date()}
                copyrightInfo="This is the custom copyright information"
                logoSrc="https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
                links={[
                    [
                        { children: "Home", href: "https://www.life.gov.sg" },
                        {
                            children: "How it works",
                            href: "https://www.life.gov.sg/#how-it-works",
                        },
                        {
                            children: "Ways we help",
                            href: "https://www.life.gov.sg/#ways-we-help",
                        },
                        {
                            children: "Campaigns",
                            href: "https://www.life.gov.sg/#campaigns",
                        },
                        {
                            children: "News and media",
                            href: "https://www.life.gov.sg/#newsandmedia",
                        },
                    ],
                    [
                        {
                            children: "About us",
                            href: "https://www.life.gov.sg/about-us",
                        },
                        {
                            children: "Help & Support",
                            href: "https://www.life.gov.sg/help-support",
                        },
                        {
                            children: "Get in touch with us",
                            href: "https://www.life.gov.sg/get-in-touch",
                        },
                    ],
                ]}
                disclaimerLinks={{
                    privacy: {
                        href: "https://www.google.com",
                        target: "_blank",
                        rel: "noreferrer",
                    },
                }}
            />
        );
    },
};

export const StretchedLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Footer
                layout={"stretch"}
                lastUpdated={new Date()}
                showDownloadAddon
                links={[
                    [
                        { children: "Home", href: "https://www.life.gov.sg" },
                        {
                            children: "How it works",
                            href: "https://www.life.gov.sg/#how-it-works",
                        },
                        {
                            children: "Ways we help",
                            href: "https://www.life.gov.sg/#ways-we-help",
                        },
                        {
                            children: "Campaigns",
                            href: "https://www.life.gov.sg/#campaigns",
                        },
                        {
                            children: "News and media",
                            href: "https://www.life.gov.sg/#newsandmedia",
                        },
                    ],
                    [
                        {
                            children: "About us",
                            href: "https://www.life.gov.sg/about-us",
                        },
                        {
                            children: "Help & Support",
                            href: "https://www.life.gov.sg/help-support",
                        },
                        {
                            children: "Get in touch with us",
                            href: "https://www.life.gov.sg/get-in-touch",
                        },
                    ],
                ]}
            />
        );
    },
};
