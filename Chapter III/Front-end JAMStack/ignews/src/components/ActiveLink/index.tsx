import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement } from 'react';
import { useRouter } from 'next/dist/client/router';


interface ActiveProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveProps) {
    const { asPath } = useRouter()

    const className = asPath === rest.href
    ? activeClassName
    : '';


    return (
        <Link {...rest}>
            {cloneElement(children, {
                className,
            })}
        </Link>
    )
}