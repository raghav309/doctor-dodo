import { ReactNode } from 'react';
import TabList from './TabList';

type EditorProps = {
    mdComponent: ReactNode;
};

function Editor({ mdComponent }: EditorProps) {
    return (
        <section className="Editor">
            <TabList />
            <section className="EditorBody">{mdComponent}</section>
        </section>
    );
}

export default Editor;
