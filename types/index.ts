export interface IMainLayoutProps {
    children: React.ReactNode;
}

export interface IModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export interface useStoreModalStore {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

export interface IStoreIdParamsProps {
    params: {
        storeId: string;
    }
}

export interface IHeadingProps {
    title: string;
    description: string;
}