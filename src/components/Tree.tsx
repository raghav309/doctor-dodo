import TreeFile from './TreeFile';
import TreeFolder from './TreeFolder';

function Tree() {
    return (
        <section className="Tree">
            <TreeFolder name="src" level={1}>
                <TreeFolder name="components" level={2}>
                    <TreeFile name={'modal.js'} level={3} />
                    <TreeFile name={'modal.css'} level={3} />
                </TreeFolder>
                <TreeFile name={'index.html'} level={2} />
                <TreeFile name={'index.js'} level={2} />
            </TreeFolder>
            <TreeFile name={'package.json'} level={1} />
        </section>
    );
}

export default Tree;
