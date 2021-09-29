export const THEAD_TABLE_INVENTORY_ITEM = [
    {
        Code: "IdInventoryItem",
        NameFieldFilter: "IdInventoryItem",
        Name: "Id Món ăn",
        Width: 0,
        TextAlign: "flex-start",
        TypeFilter: "select-box",
        TypeData: "string",
        Active: false,
    },
    {
        Code: "TypeInventoryItem",
        NameFieldFilter: "TypeInventoryItem",
        Name: "Loại món",
        Width: 8,
        TextAlign: "flex-start",
        TypeFilter: "select-box",
        TypeData: "string",
        Options: [
            { Name: "Tất cả", Id: null },
            { Name: "Món ăn", Id: "Món ăn" },
        ],
        Active: true,
    },
    {
        Code: "CodeInventoryItem",
        NameFieldFilter: "CodeInventoryItem",
        Name: "Mã món",
        Width: 12,
        TextAlign: "flex-start",
        TypeFilter: "string",
        TypeData: "string",
        Active: true,
    },
    {
        Code: "NameInventoryItem",
        NameFieldFilter: "NameInventoryItem",
        Name: "Tên món",
        Width: 16,
        TextAlign: "flex-start",
        TypeFilter: "string",
        TypeData: "string",
        Active: true,
    },
    {
        Code: "NameInventoryItemGroup",
        NameFieldFilter: "NameInventoryItemGroup_FULLTEXT",
        Name: "Nhóm thực đơn",
        Width: 8,
        TextAlign: "flex-start",
        TypeFilter: "string",
        TypeData: "string",
        Active: true,
    },
    {
        Code: "NameUnit",
        NameFieldFilter: "NameUnit_FULLTEXT",
        Name: "Đơn vị",
        Width: 7,
        TextAlign: "flex-start",
        TypeFilter: "string",
        TypeData: "string",
        Active: true,
    },
    {
        Code: "Price",
        NameFieldFilter: "Price",
        Name: "Giá bán",
        Width: 8,
        TextAlign: "flex-end",
        TypeFilter: "number",
        TypeData: "number",
        Active: true,
    },
    {
        Code: "IsChangeByTime",
        NameFieldFilter: "IsChangeByTime",
        Name: "Thay đổi theo thời giá",
        Width: 9,
        TextAlign: "center",
        TypeFilter: "select-box",
        TypeData: "checkbox",
        Options: [
            { Name: "Có", Id: 1 },
            { Name: "Không", Id: 0 },
        ],
        Active: true,
    },
    {
        Code: "IsAutoChange",
        NameFieldFilter: "IsAutoChange",
        Name: "Điều chỉnh giá tự do",
        Width: 9,
        TextAlign: "center",
        TypeFilter: "select-box",
        TypeData: "checkbox",
        Options: [
            { Name: "Có", Id: 1 },
            { Name: "Không", Id: 0 },
        ],
        Active: true,
    },
    {
        Code: "HasMaterial",
        NameFieldFilter: "HasMaterial",
        Name: "Định lượng NVL",
        Width: 8,
        TextAlign: "flex-start",
        TypeFilter: "select-box",
        TypeData: "string",
        Options: [
            { Name: "Đã được thiết lập", Id: "Đã được thiết lập" },
            { Name: "Chưa được thiết lập", Id: "Chưa được thiết lập" },
        ],
        Active: true,
    },
    {
        Code: "Active",
        NameFieldFilter: "Active",
        Name: "Hiển thị trên thực đơn",
        Width: 8,
        TextAlign: "center",
        TypeFilter: "select-box",
        TypeData: "checkbox",
        TemplateData: "",
        Options: [
            { Name: "Có", Id: 1 },
            { Name: "Không", Id: 0 },
        ],
        Active: true,
    },
    {
        Code: "StoppedSell",
        NameFieldFilter: "StoppedSell",
        Name: "Ngừng bán",
        Width: 7,
        TextAlign: "center",
        TypeFilter: "select-box",
        TypeData: "checkbox",
        Options: [
            { Name: "Có", Id: 1 },
            { Name: "Không", Id: 0 },
        ],
        Active: true,
    },
];

export const THEAD_TABLE_SERVICE_ADDITION = [
    {
        Code: "Id",
        NameFieldFilter: "Id",
        Name: "Dịch vụ ",
        Width: 0,
        TextAlign: "flex-start",
        TypeFilter: "select-box",
        TypeData: "string",
        Active: false,
    },
    {
        Code: "NameServiceAddition",
        NameFieldFilter: "NameServiceAddition",
        Name: "Sở thích phục vụ",
        Width: 70,
        TextAlign: "flex-start",
        TypeFilter: "select-box",
        TypeData: "string",
        Active: true,
    },
    {
        Code: "PriceServiceAddition",
        NameFieldFilter: "PriceServiceAddition",
        Name: "Thu thêm",
        Width: 30,
        TextAlign: "flex-end",
        TypeFilter: "input",
        TypeData: "number",
        Active: true,
    },
];

export const TYPE_CLOSE_FORM = {
    CLOSE: "close",
    CANCLE: "cancle"
};

export const TYPE_FORM = {
    ADD: "add",
    EDIT: "edit",
    CLONE: "clone"
};

export const TYPE_SAVE = {
    SAVE: "save",
    SAVE_ADD: "save_add"
};

