// Uses Declarative syntax to run commands inside a container.
pipeline {
    triggers {
        pollSCM("*/5 * * * *")
    }
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
spec:
  imagePullSecrets:
    - name: dev-imanuel-jenkins-regcred
  volumes:
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
  containers:
  - name: node
    image: node:latest
    command:
    - sleep
    args:
    - infinity
  - name: docker
    image: docker:latest
    command:
    - cat
    tty: true
    volumeMounts:
    - mountPath: /var/run/docker.sock
      name: docker-sock
'''
            defaultContainer 'node'
        }
    }
    stages {
        stage('Lint code') {
            steps {
                sh "mkdir -p /usr/share/man/man1"
                sh "apt-get update"
                sh "apt-get install -y apt-utils"
                sh "apt-get install -y openjdk-11-jre-headless libzip-dev git wget unzip"
                sh 'java -version'
                sh 'yarn'
                sh 'wget -U "scannercli" -q -O /opt/sonar-scanner-cli.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.5.0.2216.zip'
                sh "cd /opt && unzip sonar-scanner-cli.zip"
                sh "export SONAR_HOME=/opt/sonar-scanner-4.5.0.2216"
                sh 'export PATH="$PATH:/opt/sonar-scanner-4.5.0.2216/bin"'
                sh "sed -i 's@#sonar\\.host\\.url=http:\\/\\/localhost:9000@sonar.host.url=https://sonarqube.imanuel.dev@g' /opt/sonar-scanner-4.5.0.2216/conf/sonar-scanner.properties"
                sh "/opt/sonar-scanner-4.5.0.2216/bin/sonar-scanner"
            }
        }
        stage('Push') {
            steps {
                container('docker') {
                    sh "docker build -t registry-hosted.imanuel.dev/sites/imanuel.ulbricht.codes:$BUILD_NUMBER ."
                    withDockerRegistry(credentialsId: 'nexus.imanuel.dev', url: 'https://registry-hosted.imanuel.dev') {
                        sh "docker push registry-hosted.imanuel.dev/sites/imanuel.ulbricht.codes:$BUILD_NUMBER"
                    }
                }
            }
        }
    }
}
