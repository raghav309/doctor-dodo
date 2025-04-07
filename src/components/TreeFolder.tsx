import { ReactNode, useState } from 'react';
import { ChevronRightIcon } from '@primer/octicons-react';

type TreeFolderProp = {
    name: string;
    level: number;
    children: ReactNode;
};

function TreeFolder({ name, level, children }: TreeFolderProp) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const bodyClasses = isOpen ? 'TreeFolderBody' : 'TreeFolderBody TreeFolderBodyToggle';
    const handleToggle = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <section className="TreeFolder">
            <div
                className="TreeItemLabel"
                style={{ paddingLeft: `${level}rem` }}
                onClick={handleToggle}
            >
                <ChevronRightIcon size={18} />
                <p>{name}</p>
            </div>
            <div className={bodyClasses}>{children}</div>
        </section>
    );
}

export default TreeFolder;
