using System;
using System.Collections.Generic;
using dvelop.Remote.Views.Error;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;

namespace dvelop.Remote.Controller.Error
{
    [ApiController]
    [AllowAnonymous]
    [Route("error")]
    public class ErrorController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly IErrorMapper _errorMapper;
        public ErrorController(IErrorMapper errorMapper)
        {
            _errorMapper = errorMapper;
        }

        [Produces("text/html")]
        [Route("exception")]
        public IActionResult GetExceptionPage()
        {
            Exception exception = HttpContext.Features.Get<IExceptionHandlerFeature>().Error;
            return _errorMapper.MapExceptionToStatusCodeResult(exception);
        }

        [Route("exception")]
        public IActionResult GetExceptionJson()
        {
            Exception exception = HttpContext.Features.Get<IExceptionHandlerFeature>().Error;
            return _errorMapper.MapExceptionToActionResult(exception);
        }

        [Produces("text/html")]
        [Route("statuscode/{statusCode}")]
        public ActionResult GetStatusCodePage(int statusCode)
        {
            if (statusCode == 401)
                return new UnauthorizedResult();

            var model = new StatusCodeModel
            {
                StatusCode = statusCode,
                StatusCaption = ReasonPhrases.GetReasonPhrase(statusCode)
            };
            return View("StatusCode", model);
        }

        [Produces("application/json", "application/hal+json")]
        [Route("statuscode/{statusCode}")]
        public ActionResult GetStatusCodeJson(int statusCode)
        {
            return StatusCode(statusCode);
        }

        [Route("statuscode/{statusCode}")]
        public ActionResult GetStatusCodeEverythingElse(int statusCode)
        {
            Response.Headers.Add("Content-Type", "application/hal+json; application/json; text/html");
            var result = new JsonResult(406) {StatusCode = 406, Value = new {Accept = new List<string>{"application/hal+json", "application/json", "text/html"}}};
            return result;
        }
    }
}
