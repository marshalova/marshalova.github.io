import {JSX} from 'react'
import styles from './Chips.module.scss'
import classNames from "classnames";

export interface ChipsProps {
    readonly level: 'error' | 'success'
    readonly children: string | number | JSX.Element | (string | number | JSX.Element)[]
}
export function Chips({level, children} : ChipsProps) {
    return <span className={classNames(styles.Chips, {[styles.ChipsError]: level === 'error'}, {[styles.ChipsSuccess]: level === 'success'})}>{children}</span>
}