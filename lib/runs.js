'use strict';

const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600,
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800,
    },
  ],
  totalDistance: function () {
    let result = 0;
    for (let i = 0, max = this.runs.length; i < max; i++) {
      result += this.runs[i].distance;
    }
    return result;
  },
  totalTime: function () {
    let result = 0;
    for (let i = 0, max = this.runs.length; i < max; i++) {
      result += this.runs[i].timeTaken;
    }
    return result;
  },
  longestRun: function () {
    let result = 0;
    for (let i = 0, max = this.runs.length; i < max; i++) {
      let current = this.runs[i].distance;
      if (result < current) {
        result = current;
      }
    }
    return result;
  },

  averageSpeed: function () {
    return this.totalDistance() / this.totatTime();
  },
};

module.exports = mcFaceRuns;
