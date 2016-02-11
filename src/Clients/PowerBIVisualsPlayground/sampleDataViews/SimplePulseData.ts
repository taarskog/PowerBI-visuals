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

module powerbi.visuals.sampleDataViews {
    import DataViewTransform = powerbi.data.DataViewTransform;

    export class SimplePulseData extends SampleDataViews implements ISampleDataViewsMethods {

        public name: string = "SimplePulseData";
        public displayName: string = "Stock news";

        public visuals: string[] = ['pulseChart'];

        private timestamps: string[] =
        ["1/25/16 04:01", "1/25/16 04:02", "1/25/16 04:03", "1/25/16 04:04", "1/25/16 04:05", "1/25/16 04:06", "1/25/16 04:07", "1/25/16 04:08", "1/25/16 04:09", "1/25/16 04:10", "1/25/16 04:11", "1/25/16 04:12", "1/25/16 04:13", "1/25/16 04:14", "1/25/16 04:15", "1/25/16 04:16", "1/25/16 04:17", "1/25/16 04:18", "1/25/16 04:19", "1/25/16 04:20", "1/25/16 04:21", "1/25/16 04:22", "1/25/16 04:23", "1/25/16 04:24", "1/25/16 04:25", "1/25/16 04:26", "1/25/16 04:27", "1/25/16 04:28", "1/25/16 04:29", "1/25/16 04:30", "1/25/16 04:31", "1/25/16 04:32", "1/25/16 04:33", "1/25/16 04:34", "1/25/16 04:35", "1/25/16 04:36", "1/25/16 04:37", "1/25/16 04:38", "1/25/16 04:39", "1/25/16 04:40", "1/25/16 07:11", "1/25/16 07:12", "1/25/16 07:13", "1/25/16 07:14", "1/25/16 07:15", "1/25/16 07:16", "1/25/16 07:17", "1/25/16 07:18", "1/25/16 07:19", "1/25/16 07:20", "1/25/16 07:21", "1/25/16 07:22", "1/25/16 07:23", "1/25/16 07:24", "1/25/16 07:25", "1/25/16 07:26", "1/25/16 07:27", "1/25/16 07:28", "1/25/16 07:29", "1/25/16 07:30", "1/25/16 07:31", "1/25/16 07:32", "1/25/16 07:33", "1/25/16 07:34", "1/25/16 07:35", "1/25/16 07:36", "1/25/16 07:37", "1/25/16 07:38", "1/25/16 07:39", "1/25/16 07:40", "1/25/16 07:41", "1/25/16 07:42", "1/25/16 07:43", "1/25/16 07:44", "1/25/16 07:45", "1/25/16 07:46", "1/25/16 07:47", "1/25/16 07:48", "1/25/16 07:49", "1/25/16 07:50", "1/25/16 07:51", "1/25/16 07:52", "1/25/16 07:53", "1/25/16 07:54", "1/25/16 07:55", "1/25/16 07:56", "1/25/16 07:57", "1/25/16 07:58", "1/25/16 07:59", "1/25/16 08:00", "1/25/16 08:01", "1/25/16 08:02", "1/25/16 08:03", "1/25/16 08:04", "1/25/16 08:05", "1/25/16 08:06", "1/25/16 08:07", "1/25/16 08:08", "1/25/16 08:09", "1/25/16 08:10", "1/25/16 08:11", "1/25/16 08:12", "1/25/16 08:13", "1/25/16 08:14", "1/25/16 08:15", "1/25/16 08:16", "1/25/16 08:17", "1/25/16 08:18", "1/25/16 08:19", "1/25/16 08:20", "1/25/16 08:21", "1/25/16 08:22", "1/25/16 08:23", "1/25/16 08:24", "1/25/16 08:25", "1/25/16 08:26", "1/25/16 08:27", "1/25/16 08:28", "1/25/16 08:29", "1/25/16 08:30", "1/25/16 08:31", "1/25/16 08:32", "1/25/16 08:33", "1/25/16 08:34", "1/25/16 08:35", "1/25/16 08:36", "1/25/16 08:37", "1/25/16 08:38", "1/25/16 08:39", "1/25/16 08:40", "1/25/16 08:41", "1/25/16 08:42", "1/25/16 08:43", "1/25/16 08:44", "1/25/16 08:45", "1/25/16 08:46", "1/25/16 08:47", "1/25/16 08:48", "1/25/16 08:49", "1/25/16 08:50", "1/25/16 10:11", "1/25/16 10:12", "1/25/16 10:13", "1/25/16 10:14", "1/25/16 10:15", "1/25/16 10:16", "1/25/16 10:17", "1/25/16 10:18", "1/25/16 10:19", "1/25/16 10:20", "1/25/16 10:21", "1/25/16 10:22", "1/25/16 10:23", "1/25/16 10:24", "1/25/16 10:25", "1/25/16 10:26", "1/25/16 10:27", "1/25/16 10:28", "1/25/16 10:29", "1/25/16 10:30", "1/25/16 10:31", "1/25/16 10:32", "1/25/16 10:33", "1/25/16 10:34", "1/25/16 10:35", "1/25/16 10:36", "1/25/16 10:37", "1/25/16 10:38", "1/25/16 10:39", "1/25/16 10:40", "1/25/16 10:41", "1/25/16 10:42", "1/25/16 10:43", "1/25/16 10:44", "1/25/16 10:45", "1/25/16 10:46", "1/25/16 10:47", "1/25/16 10:48", "1/25/16 10:49", "1/25/16 10:50", "1/25/16 10:51", "1/25/16 10:52", "1/25/16 10:53", "1/25/16 10:54", "1/25/16 10:55", "1/25/16 10:56", "1/25/16 10:57", "1/25/16 10:58", "1/25/16 10:59", "1/25/16 11:00", "1/25/16 11:01", "1/25/16 11:02", "1/25/16 11:03", "1/25/16 11:04", "1/25/16 11:05", "1/25/16 11:06", "1/25/16 11:07", "1/25/16 11:08", "1/25/16 11:09", "1/25/16 11:10", "1/25/16 11:11", "1/25/16 11:12", "1/25/16 11:13", "1/25/16 11:14", "1/25/16 11:15", "1/25/16 11:16", "1/25/16 11:17", "1/25/16 11:18", "1/25/16 11:19", "1/25/16 11:20", "1/25/16 11:21", "1/25/16 11:22", "1/25/16 11:23", "1/25/16 11:24", "1/25/16 11:25", "1/25/16 11:26", "1/25/16 11:27", "1/25/16 11:28", "1/25/16 11:29", "1/25/16 11:30", "1/25/16 11:31", "1/25/16 11:32", "1/25/16 11:33", "1/25/16 11:34", "1/25/16 11:35", "1/25/16 11:36", "1/25/16 11:37", "1/25/16 11:38", "1/25/16 11:39", "1/25/16 11:40", "1/25/16 11:41", "1/25/16 11:42", "1/25/16 11:43", "1/25/16 11:44", "1/25/16 11:45", "1/25/16 11:46", "1/25/16 11:47", "1/25/16 11:48", "1/25/16 11:49", "1/25/16 11:50", "1/25/16 11:51", "1/25/16 11:52", "1/25/16 11:53", "1/25/16 11:54", "1/25/16 11:55", "1/25/16 11:56", "1/25/16 11:57", "1/25/16 11:58", "1/25/16 11:59"];

        private categories: string[] =
        ["Disagree", "Agree", "Disagree", "Disagree", "Agree", "Agree", "Agree", "Agree", "Agree", "Agree", "Agree", "Disagree", "Disagree", "Agree", "Agree", "Disagree", "Disagree", "Agree", "Disagree", "Disagree", "Agree", "Agree", "Agree", "Disagree", "Agree", "Disagree", "Disagree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Disagree", "Disagree", "Agree", "Agree", "Agree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Agree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Disagree", "Disagree", "Disagree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Disagree", "Disagree", "Agree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Agree", "Disagree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Disagree", "Agree", "Agree", "Agree", "Disagree", "Agree", "Agree", "Disagree", "Agree", "Agree", "Agree", "Agree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Agree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Agree", "Agree", "Disagree", "Agree", "Agree", "Disagree", "Agree", "Agree", "Agree", "Agree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Agree", "Agree", "Disagree", "Disagree", "Agree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Agree", "Agree", "Agree", "Disagree", "Disagree", "Agree", "Agree", "Disagree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Agree", "Disagree", "Agree", "Disagree", "Agree", "Agree", "Agree", "Agree", "Disagree", "Agree", "Agree", "Agree", "Agree", "Agree", "Disagree", "Disagree", "Agree", "Agree", "Agree", "Agree", "Disagree", "Agree", "Disagree", "Agree", "Agree", "Disagree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Agree", "Disagree", "Agree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Disagree", "Disagree", "Disagree", "Agree", "Disagree", "Agree", "Disagree", "Agree", "Disagree", "Agree", "Agree", "Agree", "Disagree", "Agree", "Agree", "Disagree", "Agree", "Disagree", "Agree", "Disagree", "Agree", "Agree", "Agree", "Agree", "Disagree", "Agree", "Agree", "Disagree", "Disagree", "Agree", "Agree", "Agree", "Disagree", "Agree", "Agree", "Disagree", "Agree", "Disagree", "Agree", "Agree"];

        private values: number[] =
        [0.1, 0.3, 0.5, 0.2, 0.8, 0.6, 0.15, 0.64, 0.25, 0.68, 0.55, 0.1, 0.12, 0.99, 0.32, 0.82, 0.24, 0.95, 0.37, 0.44, 0.63, 0.89, 0.67, 0.53, 0.87, 0.91, 0.36, 0.7, 0.31, 0.54, 0.73, 0.66, 0.65, 0, 0.72, 0.75, 0.84, 0.8, 0.35, 0.2, 0.63, 0.11, 0.04, 0.49, 0.12, 0.07, 0.06, 0.91, 0.59, 0.29, 0.59, 0.53, 0.43, 0.73, 0.8, 0.89, 0.6, 0.72, 0.44, 0.71, 0.09, 0.87, 0.31, 0.75, 0.8, 0.16, 0.12, 0.03, 0.23, 0.61, 0.01, 0.26, 0.1, 0.36, 0.37, 0.74, 0.13, 0.61, 0.76, 0, 0.71, 0.89, 0, 0.25, 0.45, 0.2, 0.66, 0.41, 0.27, 0.97, 0.02, 0.8, 0.3, 0.58, 0.35, 0.12, 0.77, 0.06, 0.2, 0.02, 0.2, 0.62, 0.78, 0.49, 0.74, 0.61, 0.06, 0.88, 0.92, 0.24, 0.65, 0.43, 0.53, 0.94, 0.95, 0.96, 0.13, 0.42, 0.26, 0.03, 0.33, 0.82, 0.55, 0.79, 0.34, 0.75, 0.89, 0.6, 0.1, 0.76, 0.44, 0.36, 0.82, 0.36, 0.92, 0.15, 0.59, 0.17, 0.83, 0.12, 0.43, 0.25, 0.76, 0.83, 0.65, 0.49, 0.15, 0.59, 0.17, 0.81, 0.6, 0.05, 0.06, 0.97, 0.13, 0.32, 0.85, 0.98, 0.39, 0.05, 0.08, 0.04, 0.01, 0.32, 0.98, 0.9, 0.69, 0.69, 0.53, 0.72, 0.73, 0.68, 0.84, 0.77, 0.14, 0.03, 0.27, 0.56, 0.08, 0.94, 0.85, 0.03, 0.08, 0.83, 0.81, 0.29, 0.91, 0.58, 0.55, 0.24, 0.35, 0.44, 0.13, 0.51, 0.57, 0.34, 0.65, 0.18, 0.82, 0.09, 0.93, 0.1, 0.18, 0.3, 0.13, 0.36, 0.89, 0.24, 0.49, 0.63, 0.03, 0.42, 0.92, 0, 0.42, 0.68, 0.79, 0, 0.74, 0.95, 0.56, 0.82, 0.68, 0.67, 0.29, 0.37, 0.77, 0.94, 0.57, 0.56, 0.45, 0.83, 0.03, 0.1, 0.43, 0.1, 0.55, 0.06, 0.75, 0.09, 0.82, 0.6, 0.56, 0.86, 0.22, 0.12, 0.49, 0.55, 0.18];

        private eventIndex: number[] = [15, 33, 58, 75, 130, 228];
        private eventTitles: string[] = ["Microsoft", "AT&T", "Facebook", "Twitter", "Trump", "Amazon"];
        private eventDescriptions: string[] = ["Microsoft's fiscal second quarter is expected to show that CEO Satya Nadella's plan to position Microsoft everywhere, especially in the cloud, is working at a steady pace.",
            "If you're going to market online, your first buy is on Facebook",
            "Could Facebook results ignite a tech land rally?",
            "Economic Growth Cools as U.S. Consumers Temper Spending",
            "Good morning. Here's everything you need to know in the world of advertising today.",
            "Customers will find more than one million items in the new category New store features Lab & Scientific Products; Professional Medical Supplies; Power & Hand Tools; Additive Manufacturing Products including",
        ];

        public getDataViews(): DataView[] {

            let fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "country" } });

            let timestampIdentities: DataViewScopeIdentity[] = this.timestamps.map((value: string) => {
                let timestamp: Date = new Date(Date.parse(value));
                let expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.dateTime(timestamp));
                return powerbi.data.createDataViewScopeIdentity(expr);
            });

            let categoryIdentities: DataViewScopeIdentity[] = this.categories.map((value: string) => {
                let expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
                return powerbi.data.createDataViewScopeIdentity(expr);
            });

            let eventTitles: string[] = [];
            let eventDescriptions: string[] = [];

            for (let i: number = 0; i < this.eventIndex.length; i++) {
                let k: number = this.eventIndex[i];
                eventTitles[k] = this.eventTitles[i];
                eventDescriptions[k] = this.eventDescriptions[i];
            }

            let eventTitleIdentities: DataViewScopeIdentity[] = eventTitles.map((value: string) => {
                let expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
                return powerbi.data.createDataViewScopeIdentity(expr);
            });

            let eventDescriptionIdentities: DataViewScopeIdentity[] = eventDescriptions.map((value: string) => {
                let expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
                return powerbi.data.createDataViewScopeIdentity(expr);
            });

            // Metadata, describes the data columns, and provides the visual with hints
            // so it can decide how to best represent the data
            let dataViewMetadata: powerbi.DataViewMetadata = {
                columns: [
                    {
                        displayName: 'Timestamp',
                        queryName: 'Timestamp',
                        type: powerbi.ValueType.fromDescriptor({ text: true }),
                        roles: {
                            Timestamp: true
                        }
                    },
                    {
                        displayName: 'Category',
                        queryName: 'Category',
                        type: powerbi.ValueType.fromDescriptor({ text: true }),
                        roles: {
                            Category: true
                        }
                    },
                    {
                        displayName: 'Value',
                        isMeasure: true,
                        //format: "$0,000.00",
                        queryName: 'Value',
                        roles: {
                            Value: true
                        },
                        type: powerbi.ValueType.fromDescriptor({ numeric: true }),
                        //objects: { dataPoint: { fill: { solid: { color: 'purple' } } } },
                    },
                    {
                        displayName: 'Event Title',
                        queryName: 'Event Title',
                        type: powerbi.ValueType.fromDescriptor({ text: true }),
                        roles: {
                            EventTitle: true
                        }
                    },
                    {
                        displayName: 'Event Description',
                        queryName: 'Event Description',
                        type: powerbi.ValueType.fromDescriptor({ text: true }),
                        roles: {
                            EventDescription: true
                        }
                    },
                ]
            };

            let columns: DataViewValueColumn[] = [
                {
                    source: dataViewMetadata.columns[2],
                    // Value
                    values: this.values.slice(0, 30),
                }
            ];

            let dataValues: DataViewValueColumns = DataViewTransform.createValueColumns(columns);

            return [{
                metadata: dataViewMetadata,
                categorical: {
                    categories: [
                        {
                            source: dataViewMetadata.columns[0],
                            values: this.timestamps.slice(0, 30),
                            identity: timestampIdentities
                        },
                        {
                            source: dataViewMetadata.columns[1],
                            values: this.categories.slice(0, 30),
                            identity: categoryIdentities
                        },
                        {
                            source: dataViewMetadata.columns[3],
                            values: eventTitles.slice(0, 30),
                            identity: eventTitleIdentities
                        },
                        {
                            source: dataViewMetadata.columns[4],
                            values: eventDescriptions.slice(0, 30),
                            identity: eventDescriptionIdentities
                        }
                    ],
                    values: dataValues,
                }
            }];
        }

        public randomize(): void {

        }
    }
}
