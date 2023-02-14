package edu.kh.array.ex;

public class ArrayEx2 {
	
	// 2차원 배열 사용법 1
	public void ex1() {
		
		// 2차원 배열 선언 및 할당
		int[][] arr = new int[2][3];  // 2행 3열
		
		System.out.println("행의 길이 : " + arr.length);
		System.out.println("열의 길이 : " + arr[0].length);
		
		// 2차원 배열 초기화
		
		// 1) 인덱스를 이용한 초기화
		arr[0][0] = 7;
		arr[0][1] = 14;
		arr[0][2] = 21;
		
		arr[1][0] = 28;
		arr[1][1] = 35;
		arr[1][2] = 42;
		
		System.out.println("----------------------------");
		
		
		// 2) 2중 for문을 이용한 초기화 방법
		
		int number = 0;
		
		for(int row=0; row<arr.length; row++) {  // 행 반복
			for(int col=0; col<arr[0].length; col++) {  // 열 반복
				
				arr[row][col] = number * 5; // [0][0]=0*5=0   [0][1]=1*5=5   [0][2]=2*5=10
											// [1][0]=3*5=15  [1][1]=4*5=20  [1][2]=5*5=25
				number++;
			}
		}
		System.out.println("----------------------------");
	}
	
	
	
	public void ex2() {
		
	}
	
	
	
	public void ex3() {
		
	}
	
	
	
	public void ex4() {
		
	}
	
	
	
	public void ex5() {
		
	}
	
	

}