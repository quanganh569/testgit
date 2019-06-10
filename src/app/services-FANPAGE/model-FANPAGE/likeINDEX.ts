// tslint:disable-next-line:class-name
export class likeIndex {
    id: number;
    createDate: Date;
    nameCamp: string;
    linkChiendich:URL;
    currentLike: number;
    beginLike: number;
    targetLike: number;
    status: boolean;
    campType: number;
    // tslint:disable-next-line:max-line-length
    constructor(
        createDate: Date,
        nameCamp: string,
        linkChiendich:URL,
        currentLike: number,
        beginLike: number,
        targetLike: number,
        status: boolean,
        campType: number) {
        this.createDate = createDate;
        this.nameCamp = nameCamp;
        this.linkChiendich=linkChiendich;
        this.currentLike = currentLike;
        this.beginLike = beginLike;
        this.targetLike = targetLike;
        this.status = status;
        this.campType = campType;
    }
}
