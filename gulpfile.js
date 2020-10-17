const gulp = require("gulp");
const sonarqubeScanner = require("sonarqube-scanner");

gulp.task("sonar", function(callback) {
  sonarqubeScanner(
    {
      serverUrl: "https://sonarcloud.io",
      options: {}
    },
    callback
  );
});
