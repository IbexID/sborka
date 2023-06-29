import { FC, ReactNode } from "react";

interface IFCWithChildren {
    children?: ReactNode;
}
interface IFCWithClassName {
    className?: string;
}

export type FCC<T=unknown> = FC<IFCWithChildren & T>
export type FCL<T=unknown> = FC<IFCWithClassName & T>