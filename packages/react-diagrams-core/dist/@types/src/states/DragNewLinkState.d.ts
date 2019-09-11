import { AbstractDisplacementState, AbstractDisplacementStateEvent } from '@projectstorm/react-canvas-core';
import { PortModel } from '../entities/port/PortModel';
import { LinkModel } from '../entities/link/LinkModel';
import { DiagramEngine } from '../DiagramEngine';
export interface DragNewLinkStateOptions {
    /**
     * If enabled, the links will stay on the canvas if they dont connect to a port
     * when dragging finishes
     */
    allowLooseLinks?: boolean;
    /**
     * If enabled, then a link can still be drawn from the port even if it is locked
     */
    allowLinksFromLockedPorts?: boolean;
}
export declare class DragNewLinkState extends AbstractDisplacementState<DiagramEngine> {
    port: PortModel;
    link: LinkModel;
    config: DragNewLinkStateOptions;
    constructor(options?: DragNewLinkStateOptions);
    fireMouseMoved(event: AbstractDisplacementStateEvent): any;
}
