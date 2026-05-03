pipeline {
    agent any

    environment {
        IMAGE_NAME = "arpandecores"
        IMAGE_TAG = "build-${BUILD_NUMBER}"
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

        stage('Cleanup Workspace') {
            steps {
                sh """
                docker stop ${CONTAINER_NAME} || true
                docker rm ${CONTAINER_NAME} || true
                docker rmi -f ${IMAGE_NAME}:latest || true
                docker image prune -f || true
                """
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
                sh """
                sleep 5
                docker ps | grep ${CONTAINER_NAME} || (echo "Container not running!" && exit 1)
                echo "App running on port ${PORT}"
                """
            }
        }

        stage('Cleanup Old Images') {
            steps {
                sh """
                docker images ${IMAGE_NAME} --format '{{.Tag}}' | \
                grep 'build-' | sort -t- -k2 -n | head -n -3 | \
                xargs -I {} docker rmi ${IMAGE_NAME}:{} || true
                """
            }
        }

    }

    post {
        success {
            echo "✅ Deployment Successful! Build #${BUILD_NUMBER} running on port ${PORT}"
        }
        failure {
            echo "❌ Deployment Failed!"
            sh "docker logs ${CONTAINER_NAME} || true"
        }
    }
}