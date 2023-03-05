declare module '*.module.css';
declare module '*.module.scss';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
}: T;

/* пакет react-scripts и файл react-route-env.d.ts с содержимым
<reference types="react-scripts" заменяет global.d.tsF */
