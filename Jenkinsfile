pipeline {
  agent none
  stages {
    stage('Stage 1') {
      steps {
        echo 'This Works!!!!!!!!!!'
        echo 'First Job'
        echo '2nd Job'
      }
    }

    stage('Stage 2') {
      steps {
        sh 'cat testing_ma1/test.js'
      }
    }

  }
}