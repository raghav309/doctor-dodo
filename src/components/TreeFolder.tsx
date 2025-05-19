import { ReactNode, useState } from 'react';
import { ChevronRightIcon } from '@primer/octicons-react';

type TreeFolderProp = {
    name: string;
    level: number;
    children: ReactNode;
};

function TreeFolder({ name, level, children }: TreeFolderProp) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const TreeFolderBody = 'h-0 overflow-hidden transition-[height] duration-250 ease-in-out';
    const bodyClasses = isOpen ? TreeFolderBody : TreeFolderBody + ' h-auto';
    const handleToggle = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <section className="TreeFolder">
            <div className="l" style={{ paddingLeft: `${level}rem` }} onClick={handleToggle}>
                <ChevronRightIcon size={18} />
                <p>{name}</p>
            </div>
            <div className={bodyClasses}>{children}</div>
        </section>
    );
}

export default TreeFolder;
