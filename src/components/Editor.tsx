import { ReactNode } from 'react';
import TabList from './TabList';

type EditorProps = {
    mdComponent: ReactNode;
};

function Editor({ mdComponent }: EditorProps) {
    return (
        <section className="h-screen w-4/5 overflow-hidden scrool">
            <TabList />
            <section className="EditorBody h-full p-4 overflow-y-auto">{mdComponent}</section>
        </section>
    );
}

export default Editor;
