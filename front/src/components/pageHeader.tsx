import Link from "next/link";
import React from "react";

type headerProps = {home?:boolean, }
export default function pageHeader({home}: headerProps) {
    return (
        <header>
            {!home && <div><Link href={"/"}>Back</Link></div>}
            <div>TracTrucs&nbsp;!</div>
        </header>
    )
}