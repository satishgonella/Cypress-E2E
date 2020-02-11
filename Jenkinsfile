pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                echo 'Building....'
            }
        }
        stage('Unit Tests') {
            steps {
                echo 'Unit Tests....'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'npx cypress run; npm run merge_reports; npm run generate_mochawesome_report'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }

    }

     post {
                always {
                    junit 'results/cypress-report.xml'
                }
            }
}
