import { FileIcon } from '@primer/octicons-react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { getOpenFile } from '../state/treeSlice';
import { createTab } from '../state/tabSlice';

type TreeFileProp = {
    name: string;
    level: number;
};

function TreeFile({ name, level }: TreeFileProp) {
    const dispatch = useAppDispatch();
    const activeFile = useAppSelector(getOpenFile);
    const classes = activeFile === name ? 'TreeFile TreeFileActive' : 'TreeFile';

    function onClickFile(e: React.SyntheticEvent) {
        dispatch(createTab(name));
    }

    return (
        <section className={activeFile} onClick={onClickFile}>
            <div className="TreeItemLabel" style={{ paddingLeft: `${level}rem` }}>
                <FileIcon size={16} />
                <p>{name}</p>
            </div>
        </section>
    );
}

export default TreeFile;
