package com.visualstudio.rest.api.services;

import com.visualstudio.rest.api.models.dtos.ProductDTO;
import com.visualstudio.rest.api.models.dtos.ReservationDTO;
import com.visualstudio.rest.api.models.dtos.ReservationProductDTO;
import com.visualstudio.rest.api.models.entities.Reservation;

import java.util.List;

public interface IReservationService {
    List<ReservationDTO> getAll();
    ReservationDTO save(Long productId, Long userId, ReservationProductDTO reservationProductDTO);
    Reservation update(Reservation reservation);
    ReservationDTO findById(Long id);
    void delete(Long id);
    List<ReservationDTO> getUserByReservation(String email);
}