export interface PopupObj {
    title: string;
    subtitle?: string;
    text?: string;
    bigText?: string;
    email?: boolean;
};

export interface ZEvent {
    title: string;
    description?: string;
    bigDescription?: string;
    dates: {
        startDate: Date|string;
        endDate?: Date|string;
    };
};

export interface InfoBlock {
    title: string;
    text?: string;
    content?: [];
};
