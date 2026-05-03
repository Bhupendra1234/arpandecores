pipeline {
    agent any

    environment {
        IMAGE_NAME     = "arpandecores"
        IMAGE_TAG      = "latest"
        CONTAINER_NAME = "arpandecores"
        PORT           = "3000"
    }

    stages {

        stage('Checkout Code') {
            steps {
                cleanWs()
                git branch: 'main',
                    url: 'https://github.com/Bhupendra1234/arpandecores.git'
            }
        }

        stage('Clean Old Container & Image') {
            steps {
                script {
                    sh """
                        docker stop ${env.CONTAINER_NAME} || true
                        docker rm   ${env.CONTAINER_NAME} || true
                        docker rmi -f ${env.IMAGE_NAME}:${env.IMAGE_TAG} || true
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${env.IMAGE_NAME}:${env.IMAGE_TAG} ."
            }
        }

        stage('Run Container') {
            steps {
                echo "Running new container..."
                sh """
                    docker run -d \
                      --name ${env.CONTAINER_NAME} \
                      --restart unless-stopped \
                      -p ${env.PORT}:3000 \
                      ${env.IMAGE_NAME}:${env.IMAGE_TAG}
                """
            }
        }

        stage('Health Check') {
            steps {
                echo "Waiting for app to start..."
                sh """
                    sleep 5
                    curl -f http://localhost:${env.PORT} || \
                        (echo '❌ Health check failed!' && exit 1)
                """
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful! App running on port ${env.PORT}"
        }
        failure {
            sh "docker logs ${env.CONTAINER_NAME} || true"
            echo "❌ Deployment Failed!"
        }
    }
}