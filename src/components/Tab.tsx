import { XIcon } from '@primer/octicons-react';

type TabProps = {
    title: string;
    isActive: boolean;
    onClose(e: React.SyntheticEvent): void;
    onClick(e: React.SyntheticEvent): void;
};

function Tab({ title, isActive, onClose, onClick }: TabProps) {
    const classNames = isActive ? 'Tab TabActive' : 'Tab';

    return (
        <section id={title} key={title} className={classNames} onClick={onClick}>
            <p>{title}</p>
            <div className="TabBtn" onClick={onClose}>
                <XIcon size={16} />
            </div>
        </section>
    );
}

export default Tab;
