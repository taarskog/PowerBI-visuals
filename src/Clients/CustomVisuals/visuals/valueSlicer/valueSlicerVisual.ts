/// <reference path="../../../visuals/_references.ts" />
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved. 
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *   
 *  The above copyright notice and this permission notice shall be included in 
 *  all copies or substantial portions of the Software.
 *   
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

/* Please make sure that this path is correct */

module powerbi.visuals.samples {

	export interface ValueSlicerViewModel {
		from: number;
		to: number;
	};

	//Please note that class name has to be in PascalCase!
	export class ValueSlicerVisual implements IVisual {
		private root: D3.Selection;
		private dataView: DataView;

		/**
		  * Informs the System what it can do
		  * Fields, Formatting options, data reduction & QnA hints
		  */
		public static capabilities: VisualCapabilities = {
			dataRoles: [
				{
					name: 'Category',
					kind: VisualDataRoleKind.Grouping,
				},
				{
					name: "Values",
					kind: VisualDataRoleKind.Measure
				}
			],
			dataViewMappings: [{
				//conditions: [
				//	{ 'Value': { kind: VisualDataRoleKind.Measure, min: 1, max: 1 } }
				//],

				categorical: {
					categories: {
						for: { in: 'Category' },
						dataReductionAlgorithm: { top: {} }
					},
					values: {
						select: [{
							bind: { to: 'Values' }
						}]
					}
				}
			}]
		};

		private element: JQuery;

		// Convert a DataView into a view model
		public static converter(dataView: DataView): ValueSlicerViewModel {
			var viewModel: ValueSlicerViewModel = {
				from: ValueSlicerVisual.getFrom(dataView),
				to: ValueSlicerVisual.getTo(dataView),
			};

			return viewModel;
		}

		/* One time setup*/
		public init(options: VisualInitOptions): void {
			this.element = options.element;

			var root = d3.select(this.element.get(0)).append('input').attr('id', 'from').attr('type', 'number');

		}

		/* Called for data, size, formatting changes*/
		public update(options: VisualUpdateOptions) {
			if (!options.dataViews && !options.dataViews[0]) return;
			var dataView = this.dataView = options.dataViews[0];
			var viewPort = options.viewport;
			var viewModel = ValueSlicerVisual.converter(dataView);

			this.root.attr({
				'height': viewPort.height,
				'width': viewPort.width
			});
		}

		/*About to remove your visual, do clean up here */
		public destroy() {
			this.root = null;
		}

		protected static getFrom(dataView: DataView): number {
			//if (dataView) {
			//	var objects = dataView.table.rows[]();
			//	if (objects) {
			//		var general = objects['general'];
			//		if (general) {
			//			var size = <number>general['size'];
			//			if (size)
			//				return size;
			//		}
			//	}
			//}
			
			return dataView.categorical.values[0].min;
		}

		protected static getTo(dataView: DataView): number {
			return dataView.categorical.values[0].max;
		}
	}
}

/* Creating IVisualPlugin that is used to represent IVisual. */
//
// Uncomment it to see your plugin in "PowerBIVisualsPlayground" plugins list
// Remember to finally move it to plugins.ts
//
//module powerbi.visuals.plugins {
//    export var valueSlicerVisual: IVisualPlugin = {
//        name: 'ValueSlicerVisual',
//        capabilities: valueSlicerVisual.capabilities,
//        create: () => new ValueSlicerVisual()
//    };
//}