import Tab from './Tab';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { activateTab, closeTab, getActiveTab, getOpenFiles } from '../state/tabSlice';

function TabList() {
    const dispatch = useAppDispatch();
    const activeTab = useAppSelector(getActiveTab);
    const openFiles = useAppSelector(getOpenFiles);

    function onClick(e: React.SyntheticEvent) {
        e.stopPropagation();
        const tabId: string = e.currentTarget.id;
        dispatch(activateTab(tabId));
    }
    function onClose(e: React.SyntheticEvent) {
        e.stopPropagation();
        // @ts-ignore
        const tabId = e.currentTarget.parentNode.getAttribute('id');
        dispatch(closeTab(tabId));
    }

    return (
        <section className="flex border-b border-[#d1d9e0]">
            {openFiles.map((openFile) => (
                <Tab
                    title={openFile}
                    isActive={openFile === activeTab}
                    onClick={onClick}
                    onClose={onClose}
                />
            ))}
        </section>
    );
}

export default TabList;
