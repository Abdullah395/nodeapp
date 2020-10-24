node {
    def app
    def registry = "abdullah395/nodeapp"

    env.NODEJS_HOME = "${tool 'node'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

    stage('Clone repository') {
        checkout scm
    }

    stage('Build & Test app') {
                dir('nodeapp') {
                        sh 'npm install'
                        sh 'npm test'
                }
    }

    stage('Build image') {
        app = docker.build("$registry:${env.BUILD_NUMBER}", "--build-arg NODE_ENV=production nodeapp")
    }

    stage('Push image') {
        docker.withRegistry('', 'docker-cred') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

        stage('Cleanup') {
        sh "docker rmi $registry:${env.BUILD_NUMBER}"
    }
}
