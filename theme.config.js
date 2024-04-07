import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import useLocalesMap from "./components/use-locales-map";
import { languageMap, tableOfContentsTitleMap } from "./translations/text";

export default {
  logo: <span>Easyexcel</span>,
  logoLink: "https://github.com/alibaba/easyexcel",
  project: {
    link: "https://github.com/alibaba/easyexcel",
  },
  chat: {
    link: "https://github.com/chat2db/Chat2DB",
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – Easyexcel",
    };
  },
  toc: {
    float: true,
    title: () => useLocalesMap(tableOfContentsTitleMap),
  },
  head: () => {
    const { locale } = useRouter();
    const des =
      locale === "en-US"
        ? "EasyExcel is a fast, concise, and Java-based Excel processing tool that solves the issue of memory overflow with large files. It allows you to quickly complete Excel reading, writing, and other functions without having to worry about performance or memory factors"
        : "EasyExcel是一个基于Java的、快速、简洁、解决大文件内存溢出的Excel处理工具。\n" +
          "他能让你在不用考虑性能、内存的等因素的情况下，快速完成Excel的读、写等功能";
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Easyexcel" />
        <meta property="og:description" content={des} />
      </>
    );
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/alibaba/easyexcel" target="_blank">
          Easyexcel
        </a>
        .
      </span>
    ),
  },
  i18n: Object.entries(languageMap).map(([locale, text]) => ({
    locale,
    text,
  })),
  // feedback: false,
  docsRepositoryBase: "https://github.com/alibaba/easyexcel",
  // feedback:
  editLink: false,
};
