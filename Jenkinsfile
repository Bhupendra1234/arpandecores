pipeline {
    agent any

    environment {
        IMAGE_NAME = "arpandecores"
        IMAGE_TAG = "build-${BUILD_NUMBER}"   // unique tag per build
        CONTAINER_NAME = "arpandecores"
        PORT = "3000"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Cloning repository..."
                git branch: 'main',
                    url: 'https://github.com/Bhupendra1234/arpandecores.git'
            }
        }

        stage('Clean Old Container & Image') {
            steps {
                script {
                    sh """
                    echo "Stopping and removing old container..."
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true

                    echo "Removing old images..."
                    docker rmi -f ${IMAGE_NAME}:latest || true

                    echo "Pruning dangling images..."
                    docker image prune -f || true
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image: ${IMAGE_NAME}:${IMAGE_TAG}"
                sh """
                docker build -t ${IMAGE_NAME}:${IMAGE_TAG} -t ${IMAGE_NAME}:latest .
                """
            }
        }

        stage('Run Container') {
            steps {
                echo "Running new container..."
                sh """
                docker run -d \
                  --name ${CONTAINER_NAME} \
                  --restart unless-stopped \
                  -p ${PORT}:${PORT} \
                  ${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }

        stage('Health Check') {
            steps {
                echo "Waiting for container to start..."
                sh """
                sleep 5
                docker ps | grep ${CONTAINER_NAME} || (echo "Container not running!" && exit 1)
                echo "Container is up and running on port ${PORT}"
                """
            }
        }

    }

    post {
        success {
            echo "✅ Deployment Successful! App running on port ${PORT} | Build: ${BUILD_NUMBER}"
        }

        failure {
            echo "❌ Deployment Failed! Check logs with: docker logs ${CONTAINER_NAME}"
            sh "docker logs ${CONTAINER_NAME} || true"
        }
    }
}