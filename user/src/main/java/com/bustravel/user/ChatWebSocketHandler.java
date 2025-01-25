package com.bustravel.user;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class ChatWebSocketHandler extends TextWebSocketHandler {

    private final Map<String, WebSocketSession> sessions = new HashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.put(session.getId(), session);
        System.out.println("Connection established with: " + session.getId());

        // Send a welcome message when a user connects
        sendMessageToClient(session, "server", "Welcome! You are now connected.");
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        System.out.println("Received: " + payload);

        // Parse client message
        Map<String, String> parsedMessage = parseMessage(payload);
        String sender = parsedMessage.get("sender");
        String text = parsedMessage.get("text");

        // Broadcast message to all connected clients
        for (WebSocketSession s : sessions.values()) {
            if (s.isOpen()) {
                sendMessageToClient(s, sender, text);
            }
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, org.springframework.web.socket.CloseStatus status) throws Exception {
        sessions.remove(session.getId());
        System.out.println("Connection closed: " + session.getId());
    }

    private void sendMessageToClient(WebSocketSession session, String sender, String text) throws IOException {
        String formattedMessage = String.format("{\"sender\":\"%s\",\"text\":\"%s\"}", sender, text);
        session.sendMessage(new TextMessage(formattedMessage));
    }

    private Map<String, String> parseMessage(String payload) {
        // A simple parser for JSON-like messages (you can use a proper JSON parser like Jackson)
        Map<String, String> map = new HashMap<>();
        String[] parts = payload.replace("{", "").replace("}", "").replace("\"", "").split(",");
        for (String part : parts) {
            String[] keyValue = part.split(":");
            if (keyValue.length == 2) {
                map.put(keyValue[0].trim(), keyValue[1].trim());
            }
        }
        return map;
    }
}