package controllerAdvise;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.shanawaz.springboot.exceptionhandling.EmpNotFound;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<String> illegalArgumentExceptionHandler(EmpNotFound empNotFound)
	{
		return new ResponseEntity<String>("Specified Employee Id is not found..!", HttpStatus.NOT_FOUND);
	}

}
