using System;
using dvelop.Business.ExceptionService.Model;
using dvelop.Remote.Controller.Error.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;

namespace dvelop.Remote.Controller.Error
{
    public interface IErrorMapper
    {
        IActionResult MapExceptionToActionResult(Exception e);
        IActionResult MapExceptionToStatusCodeResult(Exception e);
    }

    public class ErrorMapper: IErrorMapper
    {
        public IActionResult MapExceptionToActionResult(Exception e)
        {
            int status;
            ErrorDto errorDto;

            switch (e)
            {
                case PublicAppException exception:
                    status = GetStatus(exception);
                    errorDto = MapToErrorDto(exception);
                    break;
                default:
                    status = StatusCodes.Status500InternalServerError;
                    errorDto = new ErrorDto
                    {
                        Reason = ReasonPhrases.GetReasonPhrase(StatusCodes.Status500InternalServerError)
                    };
                    break;
            }

            if (errorDto == null)
            {
                return new StatusCodeResult(status);
            }

            return new JsonResult(errorDto) {StatusCode = status};
        }

        public IActionResult MapExceptionToStatusCodeResult(Exception e)
        {
            int status = GetStatus(e);
            return new StatusCodeResult(status);
        }

        private static int GetStatus(Exception e)
        {
            switch (e)
            {
                case BadTaskException _:
                    return StatusCodes.Status400BadRequest;
                case ResourceNotFoundException _:
                    return StatusCodes.Status404NotFound;
                default:
                    return StatusCodes.Status500InternalServerError;
            }
        }

        private static ErrorDto MapToErrorDto(PublicAppException e)
        {
            return new ErrorDto
            {
                Reason = e.Message,
                ErrorCode = e.Code,
                Meta = e.Meta
            };
        }
    }
}
