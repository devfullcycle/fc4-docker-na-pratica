FROM golang:latest AS builder

LABEL maintainer="Wesley Willians"

WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o server main.go

# Final stage
FROM scratch
USER 1001
COPY --from=builder /app/server /server
ENTRYPOINT ["./server"] 