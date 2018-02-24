import * as React from "react";
import { DefaultLinkWidget } from "../widgets/DefaultLinkWidget";
import { DiagramEngine } from "../../DiagramEngine";
import { LinkFactory } from "../../AbstractFactory";
import { DefaultLinkModel } from "../models/DefaultLinkModel";

/**
 * @author Dylan Vorster
 */
export class DefaultLinkFactory extends LinkFactory<DefaultLinkModel> {
	constructor() {
		super("default");
	}

	generateReactWidget(diagramEngine: DiagramEngine, link: DefaultLinkModel): JSX.Element {
		return React.createElement(DefaultLinkWidget, {
			link: link,
			diagramEngine: diagramEngine
		});
	}

	getNewInstance(initialConfig?: any): DefaultLinkModel {
		return new DefaultLinkModel();
	}

	generateLinkSegment(model: DefaultLinkModel, selected: boolean, path: string) {
		return <path className={selected ? "selected" : ""} strokeWidth={model.width} stroke={model.color} d={path} />;
	}
}