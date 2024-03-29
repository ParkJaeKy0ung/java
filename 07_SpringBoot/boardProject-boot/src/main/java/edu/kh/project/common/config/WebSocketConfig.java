package edu.kh.project.common.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.HandshakeInterceptor;

import edu.kh.project.chatting.model.websocket.ChattingWebsocketHandler;

/*언제 가로챌지!!!*/

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer{

	@Autowired
	private ChattingWebsocketHandler chattingWebsocketHandler;
	
	@Autowired
	private HandshakeInterceptor handshakeInterceptor;
	
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		
								// 얘가 처리			// 어떤 주소로 요청이 왔을 때
		registry.addHandler(chattingWebsocketHandler, "/chattingSock")
						.addInterceptors(handshakeInterceptor)
						.setAllowedOriginPatterns("http://localhost/", "http://127.0.0.1")
						.withSockJS();
	}

}
