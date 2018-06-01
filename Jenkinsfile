#!/usr/bin/env groovy

pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout([$class                           : 'GitSCM',
                          branches                         : [[name: '*/master']],
                          browser                          : [$class: 'GithubWeb', repoUrl: 'https://github.com/afrahuls/swagger-test'],
                          doGenerateSubmoduleConfigurations: false,
                          extensions                       : [[$class: 'CloneOption', depth: 0, noTags: true, reference: '', shallow: false],
                                                              [$class: 'LocalBranch', localBranch: 'master']],
                          submoduleCfg                     : [],
                          userRemoteConfigs                : [[credentialsId: '2b891362-11e3-4b52-96e0-698ecf446a4a', url: 'https://github.com/afrahuls/swagger-test']]])
            }
        }

        stage('Prepare') {
            steps {
                sh 'rm -rf node_modules'
                sh 'npm i'
            }
        }

        stage('Build') {
            steps {
                sh 'node server.js'
            }
        }
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '15'))
        skipDefaultCheckout true
        timestamps()
        disableConcurrentBuilds()
    }
}
