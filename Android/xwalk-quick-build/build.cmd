@SETLOCAL enableextensions enabledelayedexpansion
@ECHO OFF

SET CURRENT_DIR=%cd%

:JAVAC_READY
WHERE "javac.exe">nul 2>nul
IF NOT %errorlevel%==0 (
	SET ERRORMSG=JDK�� ã�� �� �����ϴ�.
	GOTO :ERR
)
ECHO === JDK �غ�� [OK]

:PYTHON_READY
WHERE "python.exe">nul 2>nul
IF NOT %errorlevel%==0 (
	SET ERRORMSG=���̽��� ã�� �� �����ϴ�
	GOTO :ERR
)
ECHO === ���̽� �غ�� [OK]

:ANDROID_SDK_READY
WHERE "SDK Manager.exe">nul 2>nul
IF NOT %errorlevel%==0 (
	SET ERRORMSG=�ȵ���̵� SDK�� ã�� �� �����ϴ�.
	GOTO :ERR
)
ECHO === �ȵ���̵� SDK [OK]

:MAKE_APK_PY_READY
ECHO === make_apk.py ������ ã�� �ֽ��ϴ�.
WHERE /R %HOMEPATH%\desktop make_apk.py >temp_path.txt 2>nul
IF NOT %errorlevel%==0 (
	SET ERRORMSG=make_apk.py ������ ã�� �� �����ϴ�
	GOTO :ERR
)

:SET_XWALK_PATH
SET /p TEMP_XWALK_PATH=0<temp_path.txt
DEL temp_path.txt
SET XWALK_PATH=%TEMP_XWALK_PATH%
ECHO === make_apk.py �غ�� [OK]
SET /p PACKAGE=package name�� �Է��ϼ���(com.biud436.example.sample):
IF EXIST manifest.json (
	SET MANIFEST=manifest.json
) ELSE (
	SET ERRORMSG=manifest.json ������ ã�� �� �����ϴ�.
	GOTO :ERR
)
ECHO === manifest.json �غ�� [OK]
IF EXIST *.keystore (
	GOTO :FOUND_ALREADY_KEYSTORE
) ELSE (
	GOTO :NOT_FOUND
)

:FOUND_ALREADY_KEYSTORE
ECHO === Ű����� ���� �غ�� [OK]
ECHO === Ű����� ������ ã�� �ֽ��ϴ�.
WHERE /r %CURRENT_DIR% *.keystore >temp_path.txt 2>nul
SET /p KS_PATH=0<temp_path.txt
DEL temp_path.txt
ECHO %KS_PATH%������ ã�ҽ��ϴ�.
SET /p KS_ALIAS=Ű������� ��Ī�� �Է��ϼ���:
SET /p KS_PASSCODE=Ű����� ��й�ȣ�� �Է��ϼ���(6�ڸ��̻�):
SET /p KS_ALIAS_PASSCODE=Ű����� ��й�ȣ�� �ٽ� �� �� �Է��ϼ���(6�ڸ��̻�):
GOTO :MAKE_APK

:NOT_FOUND

ECHO Ű����� ������ ã�� �� �������ϴ�.
CHOICE /C YN -M "Ű����� ������ �����Ͻðڽ��ϱ�?"
IF %ERRORLEVEL%==1 (
	GOTO :CREATE_KEYSTORE
) ELSE (
	GOTO :OTHER_KEYSTORE_SET
)

:CREATE_KEYSTORE

where keytool.exe>nul 2>nul
IF NOT %errorlevel%==0 (
	SET ERRORMSG=keytool�� �����Ƿ� Ű����� ������ ������ �� �����ϴ�.
	GOTO ERR
)
SET /p KS_PATH=Ű������� ��θ� �Է��ϼ���(Ȯ���ڴ� keystore):
SET /p KS_ALIAS=Ű������� ��Ī�� �Է��ϼ���:
SET /p KS_PASSCODE=Ű����� ��й�ȣ�� �Է��ϼ���:
SET /P KS_ALIAS_PASSCODE=Ű����� ��й�ȣ�� �ٽ� �� �� �Է��ϼ���:
SET CN=%PACKAGE%
SET /P OU=���� ���� �̸��� �Է��ϼ���:
SET /P O=���� �̸��� �Է��ϼ���:
SET /P L=��/��/�� �̸��� �Է��ϼ���:
SET /P S=��/�� �̸��� �Է��ϼ���:
SET C=KR
keytool -genkey -v -keystore %KS_PATH% -alias %KS_ALIAS% -keyalg RSA -keysize 2048 -validity 10000 -keypass %KS_PASSCODE% -storepass %KS_ALIAS_PASSCODE% -dname "CN=%CN%,OU=%OU%,O=%O%,L=%L%,S=%S%,C=%C%"
GOTO :MAKE_APK

:OTHER_KEYSTORE_SET

SET /p KS_PATH=Ű ������� ��θ� �Է��ϼ��� (game.keystore):

IF NOT EXIST %KS_PATH% (
	SET ERRORMSG=Ű����� ������ �����ϴ�.
	GOTO :ERR
)
SET /p KS_ALIAS=Ű������� ��Ī�� �Է��ϼ���:
SET /p KS_PASSCODE=Ű����� ��й�ȣ�� �Է��ϼ���(6�ڸ��̻�):	
SET /p KS_ALIAS_PASSCODE=Ű����� ��й�ȣ�� �ٽ� �� �� �Է��ϼ���(6�ڸ��̻�):

:MAKE_APK
SET ARCH=arm
SET MODE=embedded
SET XCL='--ignore-gpu-blacklist'

%XWALK_PATH% --package=%PACKAGE% --manifest=%MANIFEST% --keystore-path=%KS_PATH% --keystore-alias=%KS_ALIAS% --keystore-passcode=%KS_PASSCODE% --keystore-alias-passcode=%KS_ALIAS_PASSCODE% --keep-screen-on --fullscreen --orientation=landscape --arch=%ARCH% --mode=%MODE% --xwalk-command-line=%XCL% --enable-remote-debugging

@ENDLOCAL
GOTO :EOF
PAUSE >NUL

:ERR
ECHO %ERRORMSG%
PAUSE >NUL
GOTO :EOF