interface IDefaultParam {
    ele?: string;
    heading?: string;
    description?: string;
    linkText?: string;
    linkURL?: string;
}
declare const epPlugin: {
    default: {
        ele: string;
        heading: string;
        description: string;
        linkText: string;
        linkURL: string;
    };
    createStyles(): void;
    register(values: IDefaultParam): void;
};
export { epPlugin };
