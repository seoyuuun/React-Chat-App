### 🗨️Chat Application using React JS
<br/>
Using: Sockets, Rest APIs, Sending Images, React Hooks, Props, CSS <br/>
& Backend is hosted by https://chatengine.io <br/>
<br/>
<renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState}/>}
Sending all the props of chatEngine component to the custom chatFeed component by copying them using the "..." spread operator>

Q. 문제점으로 chatFeed component 중 renderChatFeed function을 custom했으나, 해당 component의 렌더링이 멈추지 않아 시간이 지날수록 메모리가 부족해져 결국에 공간이 터져버리는 에러 발생.
