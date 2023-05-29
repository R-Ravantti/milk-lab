package org.rravanttipgp.milkapi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(path = "/api/milk")
public class MilkController {

    private final MilkService service;

    public MilkController(MilkService service) {this.service = service;}

    @GetMapping
    public ResponseEntity<MilkListDTO> getAllMilks() {
        return ResponseEntity.ok(service.getAllMilks());
    }

    @PostMapping(path = "seed")
    public ResponseEntity<MilkListDTO> seedDatabase(@RequestBody MilkListDTO dto, HttpServletRequest req) {
        return ResponseEntity.created(URI.create(req.getRequestURI())).body(service.seedDatabase(dto));
    }
}
