ex 1a Multiply 25 by 10 using the technique of repeated addition: 
MOV A, #0  
MOV R2, #10  
AGAIN:ADD A, #25  
DJNZ R2, AGAIN  
MOV R5,A 

ex 1b  wrire an ALP for Addition using simulator

CLR C                    ; CY = 0 
MOV A, #45H        ; Low byte 1 
ADD A, #0ECH      ; Add low byte 2 
MOV R0, A          ; Store low byte result 
MOV A, #02H        ; High byte 1 
ADDC A, #0FCH    ; Add high byte 2 WITH carry 
MOV R1, A          ; Store high byte result 

ex 2a Program to add first 10 natural number: 

MOV A,#0  
MOV R2, #10  
MOV R0, #0  
AGAIN:INC R0  
ADD A,R0  
DJNZ R2, AGAIN  
MOV 46H, A 

ex 2b write an ALP for subtraction in simulator 

 Subtraction with CY=0: 
ORG 00H 
MOV A, #50H      ; Load first number (minuend) 
CLR C                        ; Ensure CY = 0 (important!) 
SUBB A, #20H     ; A = 50H - 20H 
MOV R0, A                    ; Store result 
END 
 
             Subtraction with CY=1: 
ORG 00H 
MOV A, #50H      ; A = 50H 
SETB C                       ; CY = 1 (important!) 
SUBB A, #20H     ; A = 50H - 20H - 1 
MOV R0, A                    ; store result 
END

ex 3a TEST DATA TRANSFER  BETWEEN REGISTER AND 
MEMORY USING KEIL SIMULATOR 

ORG 0000H 
MOV R0,#30H 
MOV R1,#50H 
MOV R3,#05H 
BACK: MOV A,@R0 
MOV @R1,A 
INC R0 
INC R1 
DJNZ R3,BACK 
HERE: SJMP HERE 
END
                   (or)


ex 3a TO TEST DATA TRANSFER BETWEEN REGISTER AND 
MEMORY USING EDSIM 51 SIMULATOR 

MOV R0,#50H 
MOV R1,#10H 
MOV B,#0 
BACK: MOV A,@R0 
             CJNE A,B,LOOP 
LOOP: JC LOOP1 
             MOV B,A 
             INC R0 
             DJNZ R1,BACK 
             SJMP NEXT 
LOOP1: INC R0 
               DJNZ R1,BACK 
NEXT: MOV A,B 
             MOV 60H,A 
END 

ex 3b  wrire an ALP for Addition using simulator

CLR C                    ; CY = 0 
MOV A, #45H        ; Low byte 1 
ADD A, #0ECH      ; Add low byte 2 
MOV R0, A          ; Store low byte result 
MOV A, #02H        ; High byte 1 
ADDC A, #0FCH    ; Add high byte 2 WITH carry 
MOV R1, A          ; Store high byte result  

ex 4a  Program to load the accumulator with the value of 55H and complement the ACC 
700 times: 
MOV A,#55H  
MOV R3,#10  
NEXT:MOV R2,#70  
AGAIN:CPL A  
DJNZ R2,AGAIN  
DJNZ R3,NEXT 

ex 4b write an ALP for multiplication in simulator
 MULTIPLICATION: 
ORG 00H 
MOV A, #05H      ; A = 5 
MOV B, #04H      ; B = 4 
MUL AB                    ; A × B 
MOV R0, A         ; store lower byte 
MOV R1, B         ; store higher byte 
END 

ex 5a Multiply ECH by 25H using the technique of repeated addition: 
MOV R1,#0  
MOV A,#0  
MOV R0,#25H  
AGAIN: ADD A,#0ECH  
JNC HERE  
INC R1  
HERE: DJNZ R0,AGAIN   
MOV R0,A

ex 5b write an ALP for divide in simulator
 DIVISION: 
ORG 00H 
MOV A, #14H      ; A = 20 (decimal) 
MOV B, #05H      ; B = 5 
DIV AB               ; A / B 
MOV R0, A         ; Quotient 
MOV R1, B         ; Remainder 
END 

ex 6 WRITE BASIC AND ARITHMETIC PROGRAM USING   EMBEDDED C 

#include<8051.h>  
void main() {  
    unsigned char a=0x0A;  
    unsigned char b= 0x05;  
    unsigned char result_addition, result_subtraction, result_multiplication, result_division;  
    result_addition = a + b;  
    result_subtraction = a –b; 
    result_multiplication = a * b;  
    result_division = a / b;  
}

ex 7 EXPLORE DIFFERENT COMMUNICATION METHOD WITH IOT DEVICES (BLUETOOTH)
Program : 
#include <SoftwareSerial.h> 
#define LED_pin 13 
SoftwareSerial bluetooth(2, 3); // RX (Arduino pin 2), TX (Arduino pin 3) 
float data = 25.98; 
char charArray[10]; 
void setup() { 
Serial.begin(9600);         // Initialize the Serial Monitor 
 
EX NO : 
DATE   : 
 
EXPLORE DIFFERENT COMMUNICATION 
METHOD WITH IOT DEVICES (BLUETOOTH) 
 
bluetooth.begin(9600);      // Initialize Bluetooth communication 
pinMode(LED_pin, OUTPUT);   // Set LED pin as OUTPUT 
} 
void loop() 
{    // Check if data is available from the Bluetooth module 
if (bluetooth.available()) { 
char receivedChar = bluetooth.read(); // Read the character received via Bluetooth 
Serial.print("Received: "); 
Serial.println(receivedChar); 
if (receivedChar == '1') 
{ 
digitalWrite(LED_pin, HIGH); 
Serial.println("LED_ON"); 
} 
else if (receivedChar == '0') 
{ 
digitalWrite(LED_pin, LOW); 
Serial.println("LED_OFF"); 
} 
else if (receivedChar == '2') 
{ 
dtostrf(data, 6, 2, charArray); // Convert float to char array 
bluetooth.write(charArray);     // Send data back via Bluetooth 
delay(100); 
} 
} 
}

ex 8 INTRODUCTION TO ARDUINO PLATFORM AND PROGRAMMING check whether the button is pressed or not in iokit

#include<Arduino.h> // Fixed missing closing '>' 
#define buttonPin 2  
void setup() { 
  // Initialize the button pin as an input 
 pinMode(buttonPin, INPUT);  
 // Initialize serial communication  
 Serial.begin(9600); 
 Serial.println("Active-High Push Button Status:");  
} 
void loop() {  
 // Read the status of the button bool     
 buttonState = digitalRead(buttonPin);  
 // Print the button status  
 if (buttonState == HIGH) {  
  Serial.println("Button is not pressed");  
 } else {  
  Serial.println("Button is pressed (Active-High)");  
 }  
delay(1000);  
} 

ex 9 using arduino platform and programming check RGB led blinking in iotkit 


#include <Arduino.h> 
/* RGB LED pins (common cathode) */ 
#define RED_PIN    9 
#define GREEN_PIN 10 
#define BLUE_PIN  11 
/* delay (in milliseconds) */ 
#define COLOR_CHANGE_DELAY 1000 
void setup() { 
  pinMode(RED_PIN, OUTPUT); 
  pinMode(GREEN_PIN, OUTPUT); 
 
  pinMode(BLUE_PIN, OUTPUT); 
} 
void loop() { 
  digitalWrite(RED_PIN, HIGH); 
  digitalWrite(GREEN_PIN, LOW); 
  digitalWrite(BLUE_PIN, LOW); 
  delay(COLOR_CHANGE_DELAY); 
 
  digitalWrite(RED_PIN, LOW); 
  digitalWrite(GREEN_PIN, HIGH); 
  digitalWrite(BLUE_PIN, LOW); 
  delay(COLOR_CHANGE_DELAY); 
 
  digitalWrite(RED_PIN, LOW); 
  digitalWrite(GREEN_PIN, LOW); 
  digitalWrite(BLUE_PIN, HIGH); 
  delay(COLOR_CHANGE_DELAY); 
 
  digitalWrite(RED_PIN, HIGH); 
  digitalWrite(GREEN_PIN, HIGH); 
  digitalWrite(BLUE_PIN, HIGH); 
  delay(COLOR_CHANGE_DELAY); 
  digitalWrite(RED_PIN, LOW); 
  digitalWrite(GREEN_PIN, LOW); 
  digitalWrite(BLUE_PIN, LOW); 
  delay(COLOR_CHANGE_DELAY); 
} 


ex 10 connect a LED  with raspberry pi using thonny python IDE 

from machine import Pin 
import time 
led = Pin(17, Pin.OUT)  # GPIO 17 on Pico 
while True: 
    led.value(1) 
    print("LED ON") 
    time.sleep(1) 
    led.value(0) 
    print("LED OFF") 
    time.sleep(1)

ex 11 write a program to interfacing anyone sensor with raspberry PI 

from machine import Pin, time_pulse_us 
import time 
# Define pins 
TRIG = Pin(14, Pin.OUT)  # example: GPIO14 
ECHO = Pin(15, Pin.IN)   # example: GPIO15 
def get_distance(): 
# Make sure trigger is low 
TRIG.value(0) 
time.sleep_us(2) 
# Trigger high for 10us 
TRIG.value(1) 
time.sleep_us(10) 
TRIG.value(0) 
# Measure the echo pulse 
duration = time_pulse_us(ECHO, 1, 30000)   
if duration < 0: 
return None   
distance_cm = (duration / 2) * 0.0343 
return distance_cm 
while True: 
distance = get_distance() 
if distance is not None: 
print("Distance: {:.2f} cm".format(distance)) 
else: 
print("Out of range") 
time.sleep(1)
