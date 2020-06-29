export default class LoadData {

    constructor(param) {
		this.newArray = param;
		this.chartText;
		this.chartData;
    }

    get reducearray() {
        return this.chartSub()
    };

    chartSub() {
		
	if(this.newArray.length > 0) {

	const work = this.newArray.reduce((a, b) => ({worktime: parseFloat(a.worktime) + parseFloat(b.worktime)}))
	const sleep = this.newArray.reduce((a, b) => ({sleeptime: parseFloat(a.sleeptime) + parseFloat(b.sleeptime)}))
	const study = this.newArray.reduce((a, b) => ({studytime: parseFloat(a.studytime) + parseFloat(b.studytime)}))
	const leisure = this.newArray.reduce((a, b) => ({leisuretime: parseFloat(a.leisuretime) + parseFloat(b.leisuretime)}));

		return this.chartText = ({y: work.worktime, z: sleep.sleeptime, k: study.studytime, n: leisure.leisuretime})

	} else {
		return this.chartText = ({y: 1, z: 2, k: 3, n: 4})
	}
	};

	chartNumber() {

	if(this.newArray.length > 0) {

	const work = this.newArray.reduce((a, b) => ({worktime: parseFloat(a.worktime) + parseFloat(b.worktime)}))
	const sleep = this.newArray.reduce((a, b) => ({sleeptime: parseFloat(a.sleeptime) + parseFloat(b.sleeptime)}))
	const study = this.newArray.reduce((a, b) => ({studytime: parseFloat(a.studytime) + parseFloat(b.studytime)}))
	const leisure = this.newArray.reduce((a, b) => ({leisuretime: parseFloat(a.leisuretime) + parseFloat(b.leisuretime)}));

	return this.chartData = ([{ x: 'work', y: work.worktime },
		{ x: 'study', y: study.studytime },
		{ x: 'leisure', y: leisure.leisuretime },
		{ x: 'sleep', y: sleep.sleeptime }]);

	} else {
		return this.chartData = ([{ x: 'work', y: 1 },
		{ x: 'study', y: 2 },
		{ x: 'leisure', y: 3 },
		{ x: 'sleep', y: 4 }]);
	}
}
};