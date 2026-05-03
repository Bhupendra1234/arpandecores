pipeline {
    agent any

    environment {
        IMAGE_NAME = "arpandecores"
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Cloning repository..."
                git branch: 'main',
                    url: 'https://github.com/Bhupendra1234/arpandecores.git'
            }
        }

        stage('Clean Old Image') {
            steps {
                script {
                    sh """
                    docker rmi -f $IMAGE_NAME:$IMAGE_TAG || true
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh """
                docker build -t $IMAGE_NAME:$IMAGE_TAG .
                """
            }
        }

        stage('Run Container') {
            steps {
                echo "Stopping old container if running..."
                sh """
                docker stop arpandecores || true
                docker rm arpandecores || true
                """

                echo "Running new container..."
                sh """
                docker run -d \
                  --name arpandecores \
                  -p 3000:3000 \
                  $IMAGE_NAME:$IMAGE_TAG
                """
            }
        }

    }

    post {
        success {
            echo "✅ Deployment Successful!"
        }

        failure {
            echo "❌ Deployment Failed!"
        }
    }
}