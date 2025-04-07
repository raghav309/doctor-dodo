import Tree from './Tree';

type SidebarProps = {
    title: string;
};

function Sidebar({ title }: SidebarProps) {
    return (
        <section className="Sidebar">
            <h3>{title}</h3>
            <Tree />
        </section>
    );
}

export default Sidebar;
