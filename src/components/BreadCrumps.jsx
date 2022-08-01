import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <div className="text-sm breadcrumbs flex">
            <ul>
            {breadcrumbs.map(({ breadcrumb, match }, index) => (
                <li className="bc flex" key={match.url}>
                    <Link to={match.url || "/"}>{breadcrumb}</Link>
                    {index < breadcrumbs.length - 1 && ''}
                </li>
            ))}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
