import { XIcon } from '@primer/octicons-react';

type TabProps = {
    title: string;
    isActive: boolean;
    onClose(e: React.SyntheticEvent): void;
    onClick(e: React.SyntheticEvent): void;
};

function Tab({ title, isActive, onClose, onClick }: TabProps) {
    const styleTab =
        'px-3 py-2 flex justify-center gap-2 border-r border-r-[#d1d9e0] border-b-2 border-b-transparent hover:cursor-pointer transition-all duration-300 ease-in';
    const classNames = isActive ? styleTab + 'border-b-[#fd8c73]' : styleTab;

    return (
        <section id={title} key={title} className={classNames} onClick={onClick}>
            <p className="text-md text-[#59636e]">{title}</p>
            <div className="hover:cursor-pointer hover:bg-[#eff2f5]" onClick={onClose}>
                <XIcon size={16} />
            </div>
        </section>
    );
}

export default Tab;
