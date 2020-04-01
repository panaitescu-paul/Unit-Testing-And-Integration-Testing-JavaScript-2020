pipeline {
  agent any
  stages {
    stage('Check files') {
      steps {
        sh 'cat testing_ma1/index.html'
        sh 'cat testing_ma1/index.js'
        sh 'cat testing_ma1/test.js'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install -d'
      }
    }

    stage('Run test cases') {
      steps {
        sh '''# define where you want the test results
 export JUNIT_REPORT_PATH=./test-results.xml

# run mocha and tell it to use the JUnit reporter
 npx mocha --reporter mocha-jenkins-reporter'''
      }
    }

  }
}