import {Injectable} from "@angular/core";
import {FrameIconService} from "../service/frame-icon.service";

@Injectable({
    providedIn: 'root'
})
export class FrameIconLayoutModel {
    protected clickedElements: number[] = []

    constructor(
        private frameIconService: FrameIconService
    ) {
    }

    getLayout(elementIndex: number) {
        this.clickedElements.push(elementIndex)

        if (this.clickedElements.length > 1) {
            this.frameIconService.setState(this.clickedElements[0], "empty-frame")
            this.clickedElements.splice(0, 1)

            this.frameIconService.setState(elementIndex, "gradient-frame")
        } else {
            this.frameIconService.setState(elementIndex, "gradient-frame")
        }
    }
}
